function main(args, out, res) {
  for (var i = 0; i < res.服务.length; i++) {
    res.服务[i]["test"] = out;
  }
  return res.服务;
}
