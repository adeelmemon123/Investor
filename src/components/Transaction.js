import React ,{useEffect,useState}from 'react';
import { Download} from 'lucide-react';
import { useNavigate} from "react-router-dom";
import { useSelector} from 'react-redux';
import { endpoints, getEndpointURL } from './Apiendpoint';
import {Transactionpropertylogo} from './ImageFolder/Resuableimage';
import { saveAs } from 'file-saver';
import ExcelJS from 'exceljs';
import logo from '../images/logo.png';
import FullScreenLoader from './Loader';
import { useDispatch } from 'react-redux';
import { saveClickedTransaction } from './Redux/Action';




const Transaction = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  // const mystatement = useSelector(state => state.Statementreducer.mystatement);
  const memberData = useSelector(state => state.reducer.memberData.investor);
  const mystatementData = useSelector(state => state.Statementreducer.mystatement);

let mystatement;

if (mystatementData !== null && typeof mystatementData === 'object') {
  mystatement = mystatementData;
} else {
  mystatement = "0"; // Set your default value here
}


  const handleButtonClick = (clickedTransaction) => {
   
    dispatch(saveClickedTransaction(clickedTransaction));
    navigate('/transactiondetails');
    // console.log('Clicked Transaction:', clickedTransaction);
    // Do whatever you need to do with the clicked transaction data
  };



  const [Alltransactions, setAllTransactions] = useState([]);

  async function getInvestorTransactions(investorId) {
    try {
      
      const apitransaction = getEndpointURL(`${endpoints.getallinvestortransactions}`);
      const response = await fetch(`${apitransaction}?investor_id=${investorId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.transactions; // Assuming transactions are returned in the 'transactions' field
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }
  
  useEffect(() => {

    async function fetchData() {
      const transactions = await getInvestorTransactions(memberData.id);
      if (transactions !== null) {
        setAllTransactions(transactions)
    }
    }
    async function fetchInvestor() {
      await fetchData(); // Ensure transactions are fetched before calling getInvestor
    }
    fetchInvestor();  
  }, [mystatement.investor_id,setAllTransactions]);
  

  const iconStyle = {
    width: "1rem",
    height: "1rem",

  };


  const generateExcelDocument = async () => {
    setLoading(true); // Set loading state to true to show the loader
    // Simulate an asynchronous operation (e.g., API call) here
    setTimeout(() => {
      setLoading(false); // Set loading state to false to hide the loader after some time
    }, 600); // Simulate a 3-second delay
  
    try {
        // Create a new workbook
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Sheet1');
        worksheet.views = [
          {
              showGridLines: false // Hide gridlines
          }
      ];
        let startRow = 26;

        // Append data row by row
        Alltransactions.forEach((row, rowIndex) => {
          const currentRow = startRow + rowIndex;
          const transactionDate = new Date(row.transactiondate).toISOString().split('T')[0]; // Convert to YYYY-MM-DD format
          const transactionType = row.transactiontype.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, c => c.toUpperCase()); 
          const capitalizedPropertyName = row.propertyname.charAt(0).toUpperCase() + row.propertyname.slice(1); 
          worksheet.getCell(`E${currentRow}`).value = capitalizedPropertyName; // Fill data in column E
          worksheet.getCell(`F${currentRow}`).value = row.transactionamount; // Fill data in column F
          worksheet.getCell(`G${currentRow}`).value = transactionType; // Fill data in column G with adjusted transaction type
          worksheet.getCell(`H${currentRow}`).value = transactionDate; // Fill data in column H with formatted date

          // Set border for each cell in the row
          ['E', 'F', 'G', 'H'].forEach(column => {
            const cell = worksheet.getCell(`${column}${currentRow}`);
            cell.border = {
              top: { style: 'thin' },
              left: { style: 'thin' },
              bottom: { style: 'thin' },
              right: { style: 'thin' }
            };
          });
      });
      
        // Set font size and color for all cells
        for (let i = 26; i <= Alltransactions.length + 25; i++) {
            ['E', 'F', 'G', 'H'].forEach(column => {
                const cell = worksheet.getCell(`${column}${i}`);
                cell.font = { size: 10, color: { argb: '000000' } }; // Set font size to 14 and color to black
            });
            // Set row height for each row containing data
            worksheet.getRow(i).height = 20;
        }
        worksheet.getCell('E18').value = 'Email';
        worksheet.getCell('E19').value = 'Phone Number';
        worksheet.getCell(`F18`).value = memberData.email; // Data for row 18, column F
        worksheet.getCell(`F19`).value = memberData.mobilenumber;
        worksheet.getCell('E25').value = 'Property Name'; // Set column E heading
        worksheet.getCell('F25').value = 'Transaction Amount'; // Set column F heading
        worksheet.getCell('G25').value = 'Transaction Type'; // Set column G heading
        worksheet.getCell('H25').value = 'Date'; // Set column H heading

        // Apply styling to row 25 for columns E, F, G, and H
        ['E', 'F', 'G', 'H'].forEach(column => {
            const cell = worksheet.getCell(`${column}25`);
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'AF0E0E' } // Red background color
            };
            cell.font = { color: { argb: 'FFFFFFFF' } }; // White text color
        });

        worksheet.mergeCells('E16:H16');
        const F16 = worksheet.getCell('F16');
        F16.value = 'Transaction Summary';
        F16.font = { color: { argb: 'FFFFFFFF' }, size: 18};
        F16.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'AF0E0E' } // Red background color
      };
         // Black color and font size 18
        F16.alignment = { vertical: 'middle', horizontal: 'center' };

        // Set column widths based on content
        ['E', 'F', 'G', 'H'].forEach(column => {
            const columnWidth = worksheet.getColumn(column).values.reduce((acc, value) => {
                return Math.max(acc, value ? value.toString().length : 0);
            }, 0) + 2; // Add padding
            worksheet.getColumn(column).width = columnWidth;
        });

        // Set the height of the row for the logo
        const logoRowHeight = 140;
        worksheet.getRow(9).height = logoRowHeight;
        worksheet.mergeCells('F9:G9');
        // Add logo to the merged cell
        const logoImg = await workbook.addImage({
            buffer: await fetch(logo).then(res => res.arrayBuffer()),
            extension: 'png',
        });
        worksheet.addImage(logoImg, {
            tl: { col: 5, row: 8 }, // Top-left corner of the image
            br: { col: 6, row: 10 }  // Bottom-right corner of the image
        });

        worksheet.mergeCells('E12:H12');
        const F12 = worksheet.getCell('F12');
        F12.value = 'Transaction Report';
        F12.font = { color: { argb: '000000' }, size: 18 }; // Black color and font size 18
        F12.alignment = { vertical: 'middle', horizontal: 'center' };

        ['E18', 'E19'].forEach(cellRef => {
            const cell = worksheet.getCell(cellRef);
            cell.font = { color: { argb: '000000' }, size: 13 }; 
            cell.border = {
              top: { style: 'thin' },
              left: { style: 'thin' },
              bottom: { style: 'thin' },
              right: { style: 'thin' }
          };
        });
        ['F18', 'F19'].forEach(cellRef => {
          const cell = worksheet.getCell(cellRef);
          cell.font = {
              color: { argb: '000000' }, // Black color
              size: 10 // Font size 13
          };
          cell.border = {
              top: { style: 'thin' }, // Increase border weight to medium
              left: { style: 'thin' },
              bottom: { style: 'thin' },
              right: { style: 'thin' }
          };
      });
      

        // Generate output
        const buffer = await workbook.xlsx.writeBuffer();

        // Save the document
        saveAs(new Blob([buffer]), 'Transaction_Report.xlsx');
        console.log('Document saved.');
    } catch (error) {
        console.error('Error generating document:', error);
    }
};


  if (!memberData) {
    return <div>Loading...</div>; // Handle the loading state when data is not available
  }

  
  const TransactionItem = ({ transaction,index }) => (
    <div className="mx-auto w-2/3 ml-24 xs:ml-32 sm:ml-52 md:ml-60 lg:ml-72 xl:ml-96 shadow-lg rounded-3xl">
    <div className="bg-white p-4 rounded-xl" key={index}>
      <div className="mb-4 flex items-center space-x-3">
        <img
        src={Transactionpropertylogo(transaction.propertylogo,'rentalproperty\\','developmentproperty\\','holdingproperty\\')}
          alt="profile"
          className="object-cover h-12 sm:h-16 w-12 sm:w-16 rounded-full mr-2 bg-gray-300 border-2 sm:border-4 border-white shadow-xl"
        />
        <div className='space-x-12 flex items-center'> 
          <p>
       {transaction.propertyname}
        </p>
     <p className='text-gray-400 text-xs sm:text-xs xs:text-xxs md:text-sm lg:text-[12px] xl:text-[12px]'>
        New Transaction Has Been Added
        </p>
        </div>
      </div>
      <div className="text-left ml-20">
      <p className="sm:text-xs xs:text-xxs lg:text-md xl:text-md">
      {transaction.date}
    </p>
      </div>
      <div className="text-right mr-10"  onClick={() => handleButtonClick(transaction)}>
        <button
          variant="primary"
          className="rounded-xl p-2 shadow-xl bg-red-800 text-white h-10 w-1/12 sm:text-xs xs:text-xxs hover:bg-red-900"
        >
            <p className="sm:text-xs xs:text-xxs lg:text-md xl:text-md">
         View
    </p>
        </button>
      </div>
    </div>
  </div>
  

  );
  
  return (
    <>
   <div className="mx-auto w-2/3 ml-86">
      <div className="flex justify-end p-5"> {/* Use justify-end to move content to the right */}
          <button className="flex items-center bg-red-800 text-white px-4 py-4 rounded-xl hover:bg-red-900"  onClick={generateExcelDocument}>
          <Download className="mr-2" style={iconStyle} />
          <p className="sm:text-xs xs:text-xxs lg:text-md xl:text-md">
          Download Transaction Report
    </p>
          
          </button>
      
      </div>
    </div>
    <div className="space-y-6">
    {Alltransactions.length === 0 ? (
  <div className='w-full flex items-center justify-center text-gray-400'><p>No transactions available</p>    </div>
) : (
  Alltransactions.map((transaction) => (
    <TransactionItem  transaction={transaction} />
  ))
)}
  </div>

  {loading && <FullScreenLoader />}

    </>
  );
};

export default Transaction;
