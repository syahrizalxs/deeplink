module.exports = {
  apps: [
    {
      name: 'LinkageApp',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './.output/server/index.mjs',
      node_env: {
        NODE_ENV: 'production'
      }
    }
  ]
}
