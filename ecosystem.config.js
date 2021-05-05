module.exports = {
  apps: [
    {
      script: "index.js",
      watch: ".",
    },
    {
      script: "./service-worker/",
      watch: ["./service-worker"],
    },
  ],

  deploy: {
    production: {
      user: "bitnami",
      host: "15.236.97.173",
      ref: "origin/master",
      repo: "git@github.com:IgnaesLionel/neko.git",
      path: "/home/bitnami/neko/",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
