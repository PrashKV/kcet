const Student = require("./model");

exports.getStudentsByName = async (req, res, next, name) => {
    await Student.find({ name: { $regex: name.trim(), $options: "i" } })
        .sort({ name: 1 })
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({ error: "Eno aayt macha" });
            }

            if (data[0]) {
                let result = [];

                data.forEach((e) => {
                    result.push({
                        name: e.name.trim(),
                        roll_no: e.roll_no.trim(),
                    });
                });

                req.results = result;
            } else {
                return res.status(400).send(["No students found in database!"]);
            }
            next();
        });
};

exports.getStudentByRoll = (req, res, next, roll) => {
    Student.findOne({ roll_no: roll }, (err, data) => {
        if (err || !data) {
            return res.status(400).json(err);
        }
        req.profile = data;
        next();
    });
};

exports.getStudents = (req, res) => {
    return res.json(req.results);
};

exports.studentResult = (req, res) => {
    req.profile._id = undefined;
    return res.json(req.profile);
};
