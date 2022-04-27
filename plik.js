const Przelicz = () => {
	var flowers = parseInt(flowerslet.value);
	var malepotki = parseInt(malalet.value);
	var duzepotki = parseInt(duzalet.value);
	var EnergiaWithoutFlowers = flowers * 120;
	AX.innerHTML = " " + EnergiaWithoutFlowers + " ";
	HX.innerHTML = " " + EnergiaWithoutFlowers + " ";
	AV.innerHTML = " " + EnergiaWithoutFlowers + " ";
	AA.innerHTML = " " + EnergiaWithoutFlowers + " ";
	
	var br = EnergiaWithoutFlowers/10
	var ar = EnergiaWithoutFlowers/50
	
	var x = EnergiaWithoutFlowers/2;
	const xm = x/10;
	const xd = x/50;	
	var xmr = parseInt(xm.toFixed(5));
	var xdr = parseInt(xd.toFixed(5));
	
	var energyXX = malepotki*10 + duzepotki*50;
	var ui = EnergiaWithoutFlowers - energyXX;
	
	var SS10 = ui/10;
	var SS50 = ui/50;
	
	
	var brr = parseInt(br.toFixed(5));
	var arr = parseInt(ar.toFixed(5));
	
	var SS10R = parseInt(SS10.toFixed(5));
	var SS50R = parseInt(SS50.toFixed(5));
	
	
	BX.innerHTML = " " + brr + " ";
	CX.innerHTML = " " + arr + " ";
	
	SS10X.innerHTML = " " + SS10R + " ";
	SS50X.innerHTML = " " + SS50R + " ";
	
	SS.innerHTML = " " + ui + " ";
	SS1.innerHTML = " " + ui + " ";
	
	SS21.innerHTML = " " + ui + " ";
	
	var xxx = ui/2;
	var laa = xxx/10;
	var lbb = xxx/50;
	
	var laar = parseInt(laa.toFixed(5));
	var lbbr = parseInt(lbb.toFixed(5));
	
	LA.innerHTML = " " + laar + " ";
	LB.innerHTML = " " + lbbr + " ";
	
	
	BV.innerHTML = " " + xmr + " ";
	CV.innerHTML = " " + xdr + " ";
}
