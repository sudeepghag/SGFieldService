trigger ValidateWOStatusChange on WorkOrder (after update) {

  
   if(Trigger.isUpdate) {

     for(WorkOrder wo:Trigger.New) {
      
        if(wo.Status == 'Completed'){
        
            ServiceAppointment[] SA = [SELECT Id FROM ServiceAppointment where ParentRecordType = 'WorkOrder' and ParentRecordId = :wo.Id and Status <> 'Completed'];
            if(SA.Size() > 0){
                wo.addError('Validation Error: Work Order cannot be set to Completed. All Service Appointments are required to be completed.');
            }//end of if  
            
        }//end of if
          
     }//end of For

   
   }//end of if

}//end of trigger