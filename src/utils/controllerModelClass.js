async function Controller(req, res, validator, service) {
  try {
    const data = await validator(req);
    const result = await service(data);

    return res.status(result.statusCode || 200).json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({
      success: false,
      error: error.message,
    });
  }
}

export default Controller;
