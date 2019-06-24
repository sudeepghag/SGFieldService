({

    handleLoad: function(cmp, event, helper) {
        cmp.set('v.showSpinner', false);
        var sWO = cmp.get('v.recordId');
        cmp.set('v.WorkOrderId', sWO);
        console.log('handleLoad: ' + cmp.find("status").get("v.body"));
    },

    handleSubmit: function(cmp, event, helper) {
        cmp.set('v.disabled', true);
        cmp.set('v.showSpinner', true);
    },

    handleError: function(cmp, event, helper) {
        // errors are handled by lightning:inputField and lightning:nessages
        // so this just hides the spinnet
        cmp.set('v.showSpinner', false);
    },

    handleSuccess: function(cmp, event, helper) {
        cmp.set('v.showSpinner', false);
        cmp.set('v.saved', true);
    },
    StartDateChange: function(cmp, event, helper) {
        var sStartDate = cmp.find("startdate").get("v.value");
        cmp.find("enddate").set("v.value",sStartDate);

    },
    onStatusChange: function(cmp, event, helper) {
        var sStatus = cmp.get("v.TSE_Status_value");
        cmp.find("status").set("v.value", sStatus);

    },
    onTypeChange: function(cmp, event, helper) {
        var sType = cmp.get("v.TSE_Type_value");
        cmp.find("type").set("v.value",sType);

    }
});
