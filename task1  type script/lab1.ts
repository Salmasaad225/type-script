//question 1

var x:number 
x=3
console.log(x)



 var str:string="Hello World"
 console.log(str)



var bool:boolean=true;
console.log(bool)



var test :(any[] | boolean)
test=[10,39,true,"str"];
console.log(test);
test=false;
console.log(test);



let y:(string|number);
y='Hello';
console.log(y);
y=7;
console.log(y);



let arr:(string|number)[]
arr=["item1","item2","item3"]
console.log(arr);
arr=[2,5,8];
console.log(arr);

////////////////////////////////////////

 //enum
enum game{
    easy=9,
    med=6,
    hard=3
}
var lvl:string="easy";
//  var lvl:string="med";
if(lvl==="easy"){
    console.log(` ${game.easy}`)
}

else if(lvl==="med"){
    console.log(` ${game.med}`)
}
else {
    console.log(` ${game.hard}`)
}


//////////////////////////////////////


function devide(num1:Number,num2:Number):number{
    return this.num1/this.num2;
 }
 console.log(devide(20,4));
 


 function devide2(num1:Number,num2:Number):void{
      
     console.log(this.num1/this.num2);
  }
  devide2(20,4)
 




   //generic fun
 
  function ToDo<T>(x:T){void
     console.log(x);
  }
 ToDo({name:"salma",age:25});

 


  //class

class Student1{ 
    constructor(public _name:string,public _id:number){}
}

// class Student{ 
//     Name:string;
//     Id:number;
//     BD:Date;

//  constructor(_name:string,_id:number){
//     this.Name=_name;
//     this.Id=_id;
//     
//  } 
// }

 var std1=new Student1("Ali",1);
 var std2=new Student1("Ahmed",2);
 var std3=new Student1("Mo",3);

console.log(std1);
console.log(std2);
console.log(std3);




// //interface


interface IPerson{
    name:string;
    age:number;
    getData():void;
}




interface IStudent extends IPerson{
    address:string;
}



class Student implements IStudent{
    name:string;
    age:number;
    address:string;

    constructor(_n:string,_a:number,_add:string){
        this.name=_n;
        this.age=_a;
        this.address=_add;
    }

    getData(): void {
       console.log("Method not implemented.")
    }
}   



var std=new Student("ali",23,"helwan2000");
std.getData();





////////////////////////22222222222222222////////////////////////////////



export class Point2D{
    x:number
    y:number
    constructor(_x,_y){
        this.x=_x
        this.y=_y
    }

    Calc():void {
        console.log(Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)))
    }
}

let point = new Point2D(5,5)
let result =point.Calc()
console.log(result)



///////////////////////3333333333333333333333////////////////////////////////

class Point3D extends Point2D{
    z:number
    constructor(_x,_y,_z){
        super(_x,_y)
      this.z=_z
    }

    Calc(): void {
        console.log(Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)+Math.pow(this.z,2)))
    }
}

let point2 = new Point3D(5,5,5)
let result2 =point2.Calc()
console.log(result2)


