class Controller {
    constructor({ validator, service }) {
      this.validator = validator;
      this.service = service;
    }
  
    async handle(req, res) {
      try {
        const data = await this.validator(req);
        const result = await this.service(data);
  
        return res.status(result.status || 200).json({
          success: true,
          result
        });
      } catch (error) {
        return res.status(error.statusCode || 500).json({
          success: false,
          error: error.message
        });
      }
    }
  }
  
  export default Controller;
  