public class fsl_ServiceAppointmentExtension {

    private final ServiceAppointment sa;
    
    // The extension constructor initializes the private member
    // variable acct by using the getRecord method from the standard
    // controller.
    public fsl_ServiceAppointmentExtension(ApexPages.StandardController stdController) {
        this.sa = (ServiceAppointment)stdController.getRecord();
    }

    public String getAppointmentDetails() {
        return ' / Subject: ' + sa.Subject + ' / Status: ' + sa.Status;
    }
}