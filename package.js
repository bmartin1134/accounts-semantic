Package.describe({
  summary: 'Semantic UI Components for Useraccounts-React',
  version: '1.0.1',
  name: 'bmartin1134:accounts-semantic',
  git: 'https://github.com/royGil/useraccounts-react.git',
  documentation: null
})

Package.onUse(api => {
  api.versionsFrom('1.11.1')

  api.use('ecmascript')
  api.mainModule('index.js', 'client')
})
