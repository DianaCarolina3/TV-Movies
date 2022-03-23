interface Config {
  server: {
    port: string | number | undefined | any
  }
  mongodb: {
    url: string | any
  }
}

export default Config
