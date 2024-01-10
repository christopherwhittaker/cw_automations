function gmailAutoarchive() {
  
  var delayDays = 2; // will only impact emails more than 48h old
  var maxDate = new Date();
  maxDate.setDate(maxDate.getDate()-delayDays); // what was the date at that time?

  // Get all the threads labelled 'autoarchive'
  var label = GmailApp.getUserLabelByName("autoarchive");
  var threads = label.getThreads(0, 400);
  
  // we archive all the threads if they're unread AND older than the limit we set in delayDays
  for (var i = 0; i < threads.length; i++) {
    if (threads[i].getLastMessageDate()<maxDate)
    {
      threads[i].moveToArchive();
    }
  }
}
