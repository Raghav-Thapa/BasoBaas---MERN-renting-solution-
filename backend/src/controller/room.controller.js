const RoomService = require("../services/room.service");
const slugify = require("slugify")

class RoomController {
  _svc;

  constructor() {
    this._svc = new RoomService();
  }

  listAllRooms = async (req, res, next) => {
    try {
      let paging = {
        totalNoOfRows: await this._svc.getAllCount(),
        perPage: req.query.perPage ? Number(req.query.perPage) : 10,
        currentPage: req.query.page ? Number(req.query.page) : 1,
      };

      let data = await this._svc.getAllRooms(paging);
      res.json({
        result: data,
        status: true,
        msg: "Room Data fetched",
        meta: paging,
      });
    } catch (exception) {
      next(exception);
    }
  };

  storeRoom = async (req, res, next) => {
    try {
      let data = req.body;
      if (req.files) {
        data.images = req.files.map((item) => {
          return item.filename;
        });
      }
 console.log(data)
      if (typeof data.attributes === "string") {
        data.attributes = JSON.parse(data.attributes);
      }

      let validated = await this._svc.roomValidate(data);
      validated.slug = slugify(validated.name, { lower: true });
      if (validated.categories === "null") {
        validated.categories = null;
      } else {
        validated.categories = validated.categories.split(",");
      }

      if (validated.brand === "null") {
        validated.brand = null;
      }

      if (validated.sellerId === "null") {
        validated.sellerId = null;
      }

      validated.afterDiscount =
        validated.price - (validated.price * validated.discount) / 100;
      let response = await this._svc.createRoom(validated);
      res.json({
        result: response,
        msg: "Room Created successfully",
        status: true,
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };
  updateRoom = async (req, res, next) => {
    try {
      let data = req.body;
      let room = await this._svc.getRoomById(req.params.id);
      let images = [];
      if (req.files) {
        images = req.files.map((item) => {
          return item.filename;
        });
      }

      data.images = [...room.images, ...images];

      if (typeof data.attributes === "string") {
        data.attributes = JSON.parse(data.attributes);
      }

      let validated = await this._svc.roomValidate(data);

      if (validated.categories === "null") {
        validated.categories = null;
      } else {
        validated.categories = validated.categories.split(",");
      }

      if (validated.brand === "null") {
        validated.brand = null;
      }

      if (validated.sellerId === "null") {
        validated.sellerId = null;
      }

      validated.afterDiscount =
        validated.price - (validated.price * validated.discount) / 100;

      let response = await this._svc.updateRoom(validated, req.params.id);
      res.json({
        result: response,
        msg: "Room Updated successfully",
        status: true,
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };
  getRoomById = async (req, res, next) => {
    try {
      let room = await this._svc.getRoomById(req.params.id)

      res.json({
        result: room,
        msg: "Room fetched successfully",
        status: true,
        meta: null
      })
    } catch (except) {
      next(except)
    }
  }

  getRoomBySlug = async (req, res, next) => {
    try {
      let room = await this._svc.getRoomByFilter(
        {
          slug: req.params.slug,
        },
        {
          perPage: 1,
          currentPage: 1,
        }
      );

      res.json({
        result: room[0],
        msg: "Room fetched successfully",
        status: true,
        meta: null,
      });
    } catch (except) {
      next(except);
    }
  };

  deleteRoom = async (req, res, next) => {
    try {
      let room = await this._svc.getRoomById(req.params.id)
      let del = await this._svc.deleteRoomById(req.params.id);
      res.json({
        result: del,
        msg: "Room deleted successfully",
        status: true,
        meta: null
      })
    } catch (except) {
      next(except)
    }
  }

  getRoomForHomePage = async (req, res, next) => {
    try {
      let filter = {
        status: "active",
      }
      let paging = {
        totalNoOfRows: await this._svc.getAllCount(filter),
        perPage: req.query.perPage ? Number(req.query.perPage) : 100,
        currentPage: req.query.page ? Number(req.query.page) : 1
      }

      let data = await this._svc.getRoomByFilter(filter, paging);
      res.json({
        result: data,
        msg: "Room Data",
        status: true,
        meta: paging
      })
    } catch (except) {
      next(except)
    }
  }
}
module.exports = RoomController;