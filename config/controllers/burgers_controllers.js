const express = require("express");
const router = express.Router();
const orm = require("../orm.js");

router.get("/", function (req, res) {
    orm.selectAll("burgers", function (data) {
        var allBurgers = {
            burgers: data
        };
        res.render("index", allBurgers);
    });
});

router.post("/api/burgers", function (req, res) {
    orm.insertOne("burgers",
        [        //col names
            "burger_name",
            "devoured"
        ],
        [req.body.burger_name,
            0
        ], console.log
    );
    res.end()
});

router.put("/api/burgers/:id", function (req, res) {
    let condition = "id = " + req.params.id;
    orm.updateOne('burgers', req.body, condition, () => {
        console.log('updated:', req.body);
        res.end();
    });
});

router.delete("api/burgers/:id", (req, res) => {
    console.log('got here?');
    let condition = "id = " + req.params.id;

    orm.deleteOne("burgers", condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
})

module.exports = router;