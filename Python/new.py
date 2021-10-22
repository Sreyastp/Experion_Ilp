
master=[]

def add_patient():
    new_patient=[]
    
    name=input("enter the name")
    address=input("enter the address")
    dob=input("enter the dob")

    new_patient.append(name)
    new_patient.append(address)
    new_patient.append(dob)

    
    master.append(new_patient)
    
def view_patient():
        print(master)





exit="0"
while(exit=="0"):
    
    user_input=input("1-student,2-view application,3-exit the application")

    if (user_input=="1"):
        add_patient()

    elif (user_input=="2"):
        view_patient()

    elif (user_input=="3"):
        exit="1"

    else:
        print("invalid output,give the right input")