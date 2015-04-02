// https://atmospherejs.com/meteorhacks/flow-router
FlowRouter.route('/', {
  action: function () {
    FlowLayout.render('main',  { header: "topNav", body: "taskList", footer: "footer" })
  }
})
