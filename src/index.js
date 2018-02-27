// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
var H=0;
var Q=0;
var D=0;
var N=0;
var P=0;
var currencyR;
var result = new Object();

if (currency>10000)	
{
		result.error="You are rich, my friend! We don't have so much coins for exchange";
		return result;
}

if (currency<=0)
{
	return result;
}	

currencyR=currency;

while(currencyR>50)
{
	currencyR=currencyR-50;
	H++;
} 

while(currencyR>25)
{
	currencyR=currencyR-25;
	Q++;
}

while(currencyR>10)
{
	currency=currencyR-10;
	D++;
}

while(currencyR>5)
{
	currencyR=currencyR-5;
	N++;
}

while(currencyR>1)
{
	currencyR=currencyR-1;
	P++;
}

if(H>0)
{
	result.H=H;
}

if(Q>0)
{
	result.Q=Q;
}

if(D>0)
{
	result.D=D;
}

if(N>0)
{
	result.N=N;
}

if(P>0)
{
	result.P=P;
}

return result;

}
