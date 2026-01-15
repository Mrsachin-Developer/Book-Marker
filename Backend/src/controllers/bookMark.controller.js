import { MarkerSchema } from "../models/bookMark.model";

const addMark = async (req, res) => {
  try {
    const { title, url, tags, isFavorite } = req.body;

    if (!title || !url) {
      return res.status(400).json({
        message: "Please provide title and url",
        success: false,
      });
    }

    const newMark = await MarkerSchema.create({
      title,
      url,
      tags,
      isFavorite,
      user: req.user.userId,
    });

    return res.status(201).json({
      message: "Bookmark added successfully",
      success: true,
      data: newMark,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to add bookmark",
      success: false,
      error: error.message,
    });
  }
};

const deleteMark = async (req, res) => {
  try {
    const { id } = req.params;

    const mark = await MarkerSchema.findById(id);

    if (!mark) {
      return res.status(404).json({
        message: "BookMark is not found",
        success: false,
      });
    }

    if (mark.user.toString() !== req.user.userId) {
      return res.status(403).json({
        message: "Not Authorized to delete the Bookmark",
        success: false,
      });
    }

    await mark.deleteOne();
    return res.status(200).json({
      message: "BookMark is deleted",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete BookMark",
      success: false,
      error: error.message,
    });
  }
};

const updateMark = async (req, res) => {
  try {
    const { id } = req.params;

    const mark = await MarkerSchema.findById(id);

    if (!mark) {
      return res.status(404).json({
        message: "BookMark is not found",
        success: false,
      });
    }

    if (mark.user.toString() !== req.user.userId) {
      return res.status(403).json({
        message: "Not Authorized to update",
        success: false,
      });
    }

    const { title, url, tags, isFavorite } = req.body;

    if (title !== undefined) mark.title = title;
    if (url !== undefined) mark.url = url;
    if (tags !== undefined) mark.tags = tags;
    if (isFavorite !== undefined) mark.isFavorite = isFavorite;

    await mark.save();

    return res.status(200).json({
      message: "BookMark is updated",
      success: true,
      data: mark,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to Update the BookMark",
      success: false,
    });
  }
};
