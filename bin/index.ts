import express from 'express'
import morgan from 'morgan'
import promMid from 'express-prometheus-middleware'
const app = express()
app.use(morgan("common"))
app.use(promMid({
    metricsPath: "/metrics",
    collectDefaultMetrics: true
}))
app.get("/", async (req, res) => {
    res.send("hellooooo")
})



app.listen(process.env.PORT || 3000)