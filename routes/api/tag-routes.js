const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: {
          model: Product,
          as: 'products',
          through: {
            model: ProductTag,
            as: 'product_tag(s)',
          }
        },
    });
    if (tagData) {
      res.status(200).json(tagData);
    } else {
      res.status(404).json({message: 'No Tag Data Found!'});
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: {
          model: Product,
          as: 'products',
          through: {
            model: ProductTag,
            as: 'product_tag(s)',
          }
        },
    });
    if (tagData) {
      res.status(200).json(tagData);
    } else {
      res.status(404).json({message: 'No Tag Data Found!'});
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try { 
    const newTag = await Tag.create(req.body);
    if (newTag) {
      res.status(200).json(newTag);
    } else {
      res.status(404).json({message: 'No Tag Data Found!'});
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try { 
    const newTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    if (newTag) {
      res.status(200).json(newTag);
    } else {
      res.status(404).json({message: 'No Tag Data Found!'});
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await ProductTag.destroy({
          where: {
            tag_id: req.params.id
          }
        }); 
    const tagData = await Tag.destroy({
      where: {
      id: req.params.id,
      }
    });
    if (tagData) {
      res.status(200).json(tagData);
    } else {
      res.status(404).json({message: 'No Tag Data Found!'});
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
