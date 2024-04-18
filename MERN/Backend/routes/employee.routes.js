const mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

let exampleSchema = require("../models/employee");

router.route("/add-emp").post(async (req, res, next) => {
    await exampleSchema
        .create(req.body)
        .then((result) => {
            res.json({
                data: result,
                message: "New employee added",
                status: 200
            });
        })
        .catch((err) => {
            return next(err);
        });
});

// //Read Employee Data
// router.route("/").get(async (req, res, next) => {
//     await employeeSchema
//         .find()
//         .then((result) => {
//             res.json({
//                 data: result,
//                 message: "All Employee data fetched successfully",
//                 status: 200,
//             });
//         })
//         .catch((err) => {
//             return next(err);
//         })
// });

// //Read-1 Employee Data
// router.route("/get-emp/:id").get(async (req, res, next) => {
//     await employeeSchema
//         .findById(req.params.id)
//         .then((result) => {
//             res.json({
//                 data: result,
//                 message: "one Employee data fetched successfully",
//                 status: 200,
//             });
//         })
//         .catch((err) => {
//             return next(err);
//         })
// });


// //Update-1 Employee Data
// router.route("/update-emp/:id").put(async (req, res, next) => {
//     await employeeSchema
//         .findByIdAndUpdate(req.params.id,{
//             $set:req.body,
//         })
//         .then((result) => {
//             res.json({
//                 data: result,
//                 message: "one Employee data Updated successfully",
//                 status: 200,
//             });
//         })
//         .catch((err) => {
//             return next(err);
//         })
// });

//Delete-1 Employee Data
// router.route("/delete-emp/:id").delete(async (req, res, next) => {
//     await employeeSchema
//         .findByIdAndDelete(req.params.id)
//         .then((result) => {
//             res.json({
//                 data: result,
//                 message: "one Employee data deleted successfully",
//                 status: 200,
//             });
//         })
//         .catch((err) => {
//             return next(err);
//         })
// });
module.exports = router;