        //data clearing function
        function clr() {
            document.getElementById("result").value = " ";
        }

        // const deg = () => {


        //     let expression = document.getElementById("display").value
          
        //     if (expression.search("sin") >= 0) {
          
          
        //       let value = expression.replace(/sin/, "Math.sin")
        //       console.log(value)
        //       value = value.replace(/[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)/g,
        //       function (m) {
            
        //         return m + "*(Math.PI/180)"
        //       })
        //    document.getElementById("display").value =eval(value)
           
          
        //     }
        //     else if (expression.search("cos") >= 0) {
          
          
        //       let value = expression.replace(/cos/, "Math.cos")
        //       console.log(value)
        //       value = value.replace(/[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)/g,
        //       function (m) {
            
        //         return m + "*(Math.PI/180)"
        //       })
        //       document.getElementById("display").value =eval(value)
          
        //     }
          
          
          
        //   }

        //data show in input box tag 
        function calii(values) {
            document.getElementById("result").value += values
        }
        //calcutate or perform operation input tag values 
        function cal() {
            var Data = document.getElementById("result").value
            var inn=Data.includes("/0")
            console.log(Data)
            if (Data === "") {
                Data = document.getElementById("result").value=0
            }
            else if(inn=== true){
                Data = document.getElementById("result").value="Infinity"
            }
            else {
               Data = Data.replaceAll('resin', '392.9*');
                var q = nerdamer(Data);
                let ndata = q.evaluate().toString()
                var newData = eval(ndata);
                document.getElementById("result").value = newData
            }
        }

        //radian function work for find radian
        function Degree() {
            var degreeData = document.getElementById("result").value
            degreeData = degreeData.replaceAll('resin', '392.9*')
            degreeData = nerdamer(degreeData);
            var data = degreeData.evaluate().toString()
            var newData = eval(data);
            var result = (newData * 180/Math.PI)
            document.getElementById("result").value = result
        }


        //it is used to delete last values
        function leng() {
            var Data = document.getElementById("result").value
            var len = Data.length;
            console.log(len);
            var cut = Data.slice(0, len - 1)
            document.getElementById("result").value = cut
        }

        function square() {
            var Data = document.getElementById("result").value
            var newdata=Data*Data
            var ndata=eval(newdata)
            document.getElementById("result").value = ndata

        }
        function cube() {
            var Data = document.getElementById("result").value
            var newdata=Data*Data*Data
            var ndata=eval(newdata)
            document.getElementById("result").value = ndata
        }
        function sqrt() {
            var Data = document.getElementById("result").value
            var newdata=Math.sqrt(Data)
            document.getElementById("result").value = newdata
        }
