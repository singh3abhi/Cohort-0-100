const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); // Using middleware to inform express that body needs to be parsed as json

const users = [
  {
    name: "Abhinav",
    kidneys: [
      {
        isHealthy: true,
      },
      {
        isHealthy: false,
      },
    ],
  },
];

// This api is used to fetch kidney's count that doctor has in his clinic
app.get("/", (req, res) => {
  try {
    const query = req.query;
    const userName = query.name;

    let user = users.find((user) => user.name === userName);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const totalKidneysCount = user.kidneys.length;
    const healtyKidneys = user.kidneys.filter((kidney) => kidney.isHealthy);
    const healtyKidneysCount = healtyKidneys.length;

    const unhealthyKidneysCount = totalKidneysCount - healtyKidneysCount;

    res.status(200).json({
      totalKidneysCount,
      healtyKidneysCount,
      unhealthyKidneysCount,
    });
  } catch (e) {
    console.log(`error in get route -> ${e}`);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// This api is used to insert kidneys inside the doctor's inventory
app.post("/", (req, res) => {
  try {
    let { name, isHealthy } = req.body;

    let user = users.find((user) => user.name === name);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.kidneys.push({
      isHealthy,
    });

    console.dir(users, { depth: null });

    res.status(200).json({
      message: `Successfully inserted new kidney's in the ${name}'s inventory`,
    });
  } catch (e) {
    console.log(`error in post route -> ${e}`);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// This api is used to update all the kidneys inside the doctor's inventory
app.put("/", (req, res) => {
  try {
    let { name, isHealthy } = req.body;

    let user = users.find((user) => user.name === name);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.kidneys.forEach((kidney) => (kidney.isHealthy = isHealthy));

    console.dir(users, { depth: null });

    res.status(200).json({
      message: `Successfully updated the ${name}'s kidney inventory`,
    });
  } catch (e) {
    console.log(`error in put route -> ${e}`);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// This api is used to delete user's kidney inventory
app.delete("/", (req, res) => {
  try {
    let { name } = req.body;

    let user = users.find((user) => user.name === name);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (user.kidneys.length === 0) {
      return res.status(404).json({
        message: "No kidney's available to delete",
      });
    }

    user.kidneys = [];

    console.dir(users, { depth: null });

    res.status(200).json({
      message: `Successfully deleted the ${name}'s kidney inventory`,
    });
  } catch (e) {
    console.log(`error in delete route -> ${e}`);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Started server at port ${PORT}`);
});
