module.exports = {
  apps : [
    {
    script: './server.js',
    name: 'server-neko',
    watch: 'true'
    },
    {script: '/client/src/index.js',
    name:'client-neko',
    watch: 'true'
    } ],

  deploy : {
    production : {
      user : 'bitnami',
      host : '172.26.6.169',
      ref  : 'origin/master',
      repo : 'git@github.com:IgnaesLionel/neko.git',
      path : ' /home/bitnami/neko/',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
