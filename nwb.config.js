module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'StyleOMatic',
      externals: {
        react: 'React'
      }
    }
  }
}
