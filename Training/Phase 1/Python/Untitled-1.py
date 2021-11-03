def add():
    a=int(input("enter the first  number \n"))
    b=int(input("enter the second number \n"))
    c=a+b
    print("sum is " + c)

def sub():
    a=input("enter the first  number \n")
    b=input("enter the second number \n")
    print(c)
 

def mul():
    a=input("enter the first  number \n")
    b=input("enter the second number \n")
    c=a*b
    print(c)
  

def div():
    a=input("enter the first  number \n")
    b=input("enter the second number \n")
    c=a/b
    print(c)
  




exit="0"
while(exit=="0"):
    print("program for basic calculator \n")    

    calc_fn=input("addition-1,subtraction-2,multiplication-3,division-4,exit -5 \n")

    if (calc_fn=="1"):
        add()
    elif(calc_fn=="2"):
        sub()
    elif(calc_fn=="3"):
        mul()
    elif(calc_fn=="4"):
        div()  
    elif(calc_fn=="5"):
        exit=="1"
        
    else:
        print("invalid input ,ENTER a valid input")