import Jobs from "../models/Jobs.js";

export const getJobsData = async (request, response) => {
  let datas = [];
  const location = request.params.location;
  if(location == "undefined") {
    datas = await Jobs.find().limit(7);
  }else {
    datas = await Jobs.find({ location: { $regex: location } }).limit(7);
  }
  if (datas.length)
    response.json({
      code: 200,
      status: "OK",
      datas: datas,
      message: "success",
    });
  else
    response.json({
      code: 404,
      status: "NOT_FOUND",
      messages: "No Data Found !",
    });
};
export const getjobsByQuery = async (request, response) => {
  let datas = [];
  if (!request.query.status) {
    datas = await Jobs.find({
      "kategoris.kategori": { $regex: request.query.kategori },
    });
  } else if (!request.query.kategori) {
    datas = await Jobs.find({
      "statuses.status": { $regex: request.query.status },
    });
  } else {
    datas = await Jobs.find({
      "kategoris.kategori": { $regex: request.query.kategori },
      "statuses.status": { $regex: request.query.status },
    });
  }
  if (datas.length)
    response.json({
      code: 200,
      status: "OK",
      data: datas,
      messages: "success",
    });
  else
    response.json({
      code: 404,
      status: "NOT_FOUND",
      messages: "No Data Found !",
    });
};
export const getJobsDataBySearch = async (request, response) => {
  const keyword = request.params.keyword.toString();
  const datas = await Jobs.find({
    $or: [
      { title: { $regex: keyword } },
      { company: { $regex: keyword } },
      { location: { $regex: keyword } },
      { "statuses.status": { $regex: keyword } },
      { "kategoris.kategori": { $regex: keyword } },
    ]
  });
  if (datas.length)
    response.json({
      code: 200,
      status: "OK",
      data: datas,
      messages: "success",
    });
  else
    response.json({
      code: 404,
      status: "NOT_FOUND",
      messages: "No Data Found !",
    });
};
