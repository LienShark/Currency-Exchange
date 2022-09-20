		var optionSelect = document.getElementById('option');

		var submitBtn =document.getElementById('submit');

		submitBtn.addEventListener('click' , function(){
			var money = document.getElementById('currency').value;
			var option = optionSelect.value;
			var result = document.getElementById('result');

			console.log(money);
			console.log(option);

			if(money === isNaN || money === ''){
				result.innerHTML = '<h4>請輸入正確數字</h4>';
				}
			else if (option === 'nt2us') {
				var realMoney = parseFloat(money)/30;
				result.innerHTML = 'US ' + realMoney.toFixed(2);
			}else if(option === 'us2nt'){
				var realMoney = parseFloat(money)*30;
				result.innerHTML = 'NT ' + realMoney.toFixed(2);
			}
		});