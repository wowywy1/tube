import searchVideo from "@/src/utils/search-videos";
import { NextApiRequest, NextApiResponse } from "next";

export default function SearchApi(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = searchVideo({
      query: req.query.q?.toString() || "",
      page: Number(req.query.page || "1"),
    });
    res.status(200).json({
      code: 200,
      result,
    });
  } catch (error) {
    res.status(200).json({
      code: 500,
      result: {
        videos: [],
        count: 0,
      },
    });
  }
}
