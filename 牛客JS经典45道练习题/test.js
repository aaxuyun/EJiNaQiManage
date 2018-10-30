// function duplicates(arr) {
//     var repeat=new Array();
//     var pos;
//     var index;
//     for(i=0;i<arr.length;i++){
//         pos=arr.indexOf(arr[i],i+1);
//         index=repeat.indexOf(arr[i]);
//         if (pos>-1 && index==-1){
//             repeat.push(arr[i]);
//         };
//     }
//     return repeat;
// }

// var arr1=[1,2,3,4,4,5,5,1,2,1];
// document.getElementById("printDemo").innerHTML=duplicates(arr1);

// var re=null;
// var re2=null;
//  for (i=0;i<10;i++){
//     re=/.at/g;
//     var x=re.exec("catdsjfbatdfd");
//     console.log(x[0]);
//  }
//   for (i=0;i<10;i++){
//     re2=new RegExp("cat","g");
//    var y= re2.exec("catdsjfbatdfd");
//    console.log(y[0])
//  }


// function findall(arr,item){
//     var newArr=[];
//     var len=arr.length;
//     for(i=0;i<len;i++){
//     	index=arr.indexOf(item,i);
//     	newIndex=newArr.indexOf(index);
//     	if(index>-1 && newIndex==-1){
//     		newArr.push(index);
//     	}
//     }
//     return newArr;
// }

// function sum(arr) {
//     var sum=0;
//     for(i in arr){
//         if (typeof arr[i]=="number"){
//             sum+=arr[i];
//         }
//     }
//     return sum;
// }

// function remove(arr, item) {
//     var newArr=arr.concat();
//     for(i=0;i<newArr.length;i++){
//        var index=newArr.indexOf(item);
//         newArr.splice(index,1);
//     }
//     return newArr;
    
// }
// function removeWithoutCopy(arr, item) {
//     for(i=0;i<arr.length;i++){
//        var index=arr.indexOf(item);
//         arr.splice(index,1);
//     }
//     return arr;
// }
// function append(arr, item) {
//     var newArr=arr.concat(item);
//     return newArr
// }
// function truncate(arr,item) {
//     var newArr=arr.concat();
//     newArr.unshift(item);
//     return newArr;
// }
// function concat(arr1, arr2) {
//     var newArr=[];
//     return newArr=arr1.concat(arr2);
// }

// function insert(arr, item, index) {
//     var newArr=arr.concat();
//     newArr.splice(index,0,item);
//     return newArr;
// }

// function count(arr, item) {
//     var filter=arr.filter(function(itm,index,arr){
//         return item==itm;
//     })
//     return filter.length;
// }

// function duplicates(arr) {
//     var newArr=[],index,newIndex;
//     for(i=0;i<arr.length;i++){
//         index=arr.indexOf(arr[i],i+1);
//         newIndex=newArr.indexOf(arr[i]);
//         if(index>-1 && newIndex==-1){
//             newArr.push(arr[i]);
//         }    
//     }
//     return newArr;
// // }
// function square(arr) {
//     return arr.map(function(item,index,arr){
//         return item*item;
//     })
// }
// // var arr=[1,22,1,1,32,2,2,22];
// // var item=[12,2]

// function count(start, end) {
//     var count=0;

//     if (start<=end){  
//     console.log(count++)	
//     	timer=setTimeout(function(){
//     		count(start,end);
//     	},100);
//     	start++;
// 	}
// 	return {
// 		cancel:function(){clearTimeout(timer)}
// 	};
// }

// function count(start, end) {
//     var count=0;

//     if (start<=end){  
//     console.log(count++)	
//     	timer=setTimeout(count(start,end),100);
//     	start++;
// 	}
// 	return {
// 		cancel:function(){clearTimeout(timer)}
// 	};
// }

// count(1,50);


// function count(start, end) {
//     console.log(start);
//     var Timer = setInterval(function(){
//         console.log(++start);
//         if(start==end){
// 			stop();
//         }
//     },100);
// 	var stop=function(){
// 	        clearInterval(Timer);
// 	    }
//     return {
// 		"cancel":stop
// 	}
	
// }

// function argsAsArray(fn, arr) {

//     return fn(...arr);
// }

// var fn=function (greeting, name, punctuation) {
// 	return greeting + ', ' + name + (punctuation || '!');
// }

// arr=['Hello', '!',"2"]
// argsAsArray(fn, arr)
// fn(...arr)

// function iterate(obj) {
//     var arr=Object.keys(obj);
//     return arr.map(function(item,index,arr){
//        return item+": "+obj[item];
//     });
// }
//     var arr=[];
//     for (var key in obj){
//          if(obj.hasOwnProperty(key)){
//              arr.push(key+": "+obj[key]);
//          }
//     }
//     return arr;

//     var str="12ab";
//    var pattern=new RegExp("^[0-9]*$");
//    var matchs=pattern.exec(str);
//    consle.log(matchs.length)
// function containsNumber(str) {
//     var re=/^\$([1-9]\d{0,2}(,\d{3})*|\0)(\.\d{2})?$/;
//     return re.exec(str);
// }



// function partialUsingArguments(fn) {
// 	var args = Array.prototype.slice.call(arguments,1);
// 	var result = function(){
// 		return fn.apply(null, args.concat([].slice.call(arguments)));
// 	}
// 	return result;
// }

// var fn=function (greeting, name, punctuation) {
// 	return greeting + ', ' + name + (punctuation || '!');
// // }
// function makeClosures(arr, fn) {
//     for (i=0;i<arr.length;i++){
//         var resultArr=[];
//         resultArr[i]=function(){
//             return fn.call(this,arr[i]);
//         }
//     }
//     return resultArr;
// }
// var fn= function (x) { 
// 	return x * x; 
// }

function curryIt(sd,...arr) {
	var args = Array.prototype.slice.call(arguments,0);
	return args;
}
document.getElementById("printDemo").innerHTML=curryIt("sd","324","sdf");