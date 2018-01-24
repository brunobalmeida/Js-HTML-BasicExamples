var sortNumDaysPastDueAscendingFlag = true;
var SortMonthlyChargeAscendingFlag = true;
var SortCustomerNameAscendingFlag = true;
var SortPastDueAmountAscendingFlag = true;

function CreateCustomerDataTableHeader()
{
	
	return "<tr><th onclick='SortCustomerName();'>Customer Name</th><th onclick='SortMonthlyCharge();'>Monthly Charge</th><th onclick='SortPastDueAmount();'>Past Due Amount</th><th onclick='SortNumDaysPastDue();'>Num Days Past Due</th></tr>";
	
}

function CreateCustomerDataTable()
{

	var i = 0;
	var numRecords = customerName.length;
	var tempOutput = CreateCustomerDataTableHeader();

	for (i = 0; i < numRecords; i ++)
	{

		tempOutput += "<tr>";

		tempOutput += "<td>" + customerName[i] + "</td>";
		tempOutput += "<td>" + monthlyCharge[i] + "</td>";
		tempOutput += "<td>" + pastDueAmount[i] + "</td>";
		tempOutput += "<td>" + numDaysPastDue[i] + "</td>";

		tempOutput += "</tr>";

	}

	document.getElementById("CustomerDataTable").innerHTML = tempOutput;

}

function SortNumDaysPastDue()
{
	
	(sortNumDaysPastDueAscendingFlag == true) ? SortNumDaysPastDueAscending() : SortNumDaysPastDueDescending();
	
	sortNumDaysPastDueAscendingFlag = !sortNumDaysPastDueAscendingFlag;

}

function SwapRows(row1, row2)
{
	
	if (row1 == row2)
	{
		
		return;
		
	}
	
	var tempVar = monthlyCharge[row1];
	monthlyCharge[row1] = monthlyCharge[row2];
	monthlyCharge[row2] = tempVar;

	tempVar = customerName[row1];
	customerName[row1] = customerName[row2];
	customerName[row2] = tempVar;

	tempVar = pastDueAmount[row1];
	pastDueAmount[row1] = pastDueAmount[row2];
	pastDueAmount[row2] = tempVar;

	tempVar = numDaysPastDue[row1];
	numDaysPastDue[row1] = numDaysPastDue[row2];
	numDaysPastDue[row2] = tempVar;
	
}


function CompareNumDaysPastDue()
{

	var i = 0;
	var j = 0;
	var numRecords = customerName.length;

	for (i = 0; i < numRecords; i ++)
	{

		for (j = 0; j < numRecords; j ++)
		{

			if (numDaysPastDue[i] < numDaysPastDue[j])
			{

				SwapRows(i, j);

			}

		}

	}

	CreateCustomerDataTable();

}


function SortNumDaysPastDueAscending()
{
	
	var i = 0;
	var j = 0;
	var numRecords = customerName.length;

	for (i = 0; i < numRecords; i ++)
	{
		
		for (j = 0; j < numRecords; j ++)
		{
			
			if (numDaysPastDue[i] < numDaysPastDue[j])
			{

				SwapRows(i, j);
		
			}
			
		}
		
	}
	
	CreateCustomerDataTable();
	
}

function SortNumDaysPastDueDescending()
{
	
	var i = 0;
	var j = 0;
	var numRecords = customerName.length;

	for (i = 0; i < numRecords; i ++)
	{
		
		for (j = 0; j < numRecords; j ++)
		{
			
			if (numDaysPastDue[i] > numDaysPastDue[j])
			{

				SwapRows(i, j);

			}
			
		}
		
	}

	CreateCustomerDataTable();
	
}

function SortMonthlyCharge()
{
	
	(SortMonthlyChargeAscendingFlag == true) ? SortMonthlyChargeAscending() : SortMonthlyChargeDescending();
	
	SortMonthlyChargeAscendingFlag = !SortMonthlyChargeAscendingFlag;

}

function CompareMonthlyCharge()
{

	var i = 0;
	var j = 0;
	var numRecords = customerName.length;

	for (i = 0; i < numRecords; i ++)
	{

		for (j = 0; j < numRecords; j ++)
		{

			if (monthlyCharge[i] < monthlyCharge[j])
			{

				SwapRows(i, j);

			}

		}

	}

	CreateCustomerDataTable();

}

function SortMonthlyChargeAscending()
{
	
	var i = 0;
	var j = 0;
	var numRecords = customerName.length;

	for (i = 0; i < numRecords; i ++)
	{
		
		for (j = 0; j < numRecords; j ++)
		{
			
			if (monthlyCharge[i] < monthlyCharge[j])
			{

				SwapRows(i, j);
		
			}
			
		}
		
	}
	
	CreateCustomerDataTable();
	
}

function SortMonthlyChargeDescending()
{
	
	var i = 0;
	var j = 0;
	var numRecords = customerName.length;

	for (i = 0; i < numRecords; i ++)
	{
		
		for (j = 0; j < numRecords; j ++)
		{
			
			if (monthlyCharge[i] > monthlyCharge[j])
			{

				SwapRows(i, j);

			}
			
		}
		
	}

	CreateCustomerDataTable();
	
}

function SortCustomerName()
{
	
	(SortCustomerNameAscendingFlag == true) ? SortCustomerNameAscending() : SortCustomerNameDescending();
	
	SortCustomerNameAscendingFlag = !SortCustomerNameAscendingFlag;

}

function CompareCustomerName()
{

	var i = 0;
	var j = 0;
	var numRecords = customerName.length;

	for (i = 0; i < numRecords; i ++)
	{

		for (j = 0; j < numRecords; j ++)
		{

			if (customerName[i] < customerName[j])
			{

				SwapRows(i, j);

			}

		}

	}

	CreateCustomerDataTable();

}

function SortCustomerNameAscending()
{
	
	var i = 0;
	var j = 0;
	var numRecords = customerName.length;

	for (i = 0; i < numRecords; i ++)
	{
		
		for (j = 0; j < numRecords; j ++)
		{
			
			if (customerName[i] < customerName[j])
			{

				SwapRows(i, j);
		
			}
			
		}
		
	}
	
	CreateCustomerDataTable();
	
}

function SortCustomerNameDescending()
{
	
	var i = 0;
	var j = 0;
	var numRecords = customerName.length;

	for (i = 0; i < numRecords; i ++)
	{
		
		for (j = 0; j < numRecords; j ++)
		{
			
			if (customerName[i] > customerName[j])
			{

				SwapRows(i, j);

			}
			
		}
		
	}

	CreateCustomerDataTable();
	
}

function SortPastDueAmount()
{
	
	(SortPastDueAmountAscendingFlag == true) ? SortPastDueAmountAscending() : SortPastDueAmountDescending();
	
	SortPastDueAmountAscendingFlag = !SortPastDueAmountAscendingFlag;

}

function ComparePastDueAmount()
{

	var i = 0;
	var j = 0;
	var numRecords = customerName.length;

	for (i = 0; i < numRecords; i ++)
	{

		for (j = 0; j < numRecords; j ++)
		{

			if (pastDueAmount[i] < pastDueAmount[j])
			{

				SwapRows(i, j);

			}

		}

	}

	CreateCustomerDataTable();

}

function SortPastDueAmountAscending()
{
	
	var i = 0;
	var j = 0;
	var numRecords = customerName.length;

	for (i = 0; i < numRecords; i ++)
	{
		
		for (j = 0; j < numRecords; j ++)
		{
			
			if (pastDueAmount[i] < pastDueAmount[j])
			{

				SwapRows(i, j);
		
			}
			
		}
		
	}
	
	CreateCustomerDataTable();
	
}

function SortPastDueAmountDescending()
{
	
	var i = 0;
	var j = 0;
	var numRecords = customerName.length;

	for (i = 0; i < numRecords; i ++)
	{
		
		for (j = 0; j < numRecords; j ++)
		{
			
			if (pastDueAmount[i] > pastDueAmount[j])
			{

				SwapRows(i, j);

			}
			
		}
		
	}

	CreateCustomerDataTable();
	
}








