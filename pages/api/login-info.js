import responseFormatter from 'utils/responseFormatter';

export default async (req, res) => {
  res.json(responseFormatter(req.user))
}