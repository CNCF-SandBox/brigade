events.push = function(e) {
  e.repo.sshKey = ""
  j = new Job("test-no-key")
  j.tasks = [
    "echo hello"
  ]
  j.run()

  p = mockPods["test-no-key"]

  console.log(JSON.stringify(mockPods))

  found = _.findWhere(p.spec.containers[0].env, {name: "ACID_REPO_KEY"})
  if (found) {
    throw "Unexpectedly found an SSH key with value " + JSON.stringify(found)
  }
}