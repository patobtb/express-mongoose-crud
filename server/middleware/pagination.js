function paginate(model) {
  return (res, req, next) => {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);

    const start = (page - 1) * limit;
    const end = page * limit;

    const results = {};

    if (end < model.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }
    if (start > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    results.results = model.slice(start, end);

    res.paginate = results
    next()
  };
};

export default paginate;
