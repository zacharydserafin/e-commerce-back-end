const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: {
          model: Product,
          as: 'products',
        },
    });
    if (categoryData) {
      res.status(200).json(categoryData);
    } else {
      res.status(404).json({message: 'No Category Data Found!'});
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Must use an id of a category that already exists. Use the GET route above to view options.
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: {
          model: Product,
          as: 'products',
        },
    });
    if (categoryData) {
      res.status(200).json(categoryData);
    } else {
      res.status(404).json({message: 'No Category Data Found!'});
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

/* req.body should look like this...
    {
      category_name: "Accessories"
    }
*/
router.post('/', async (req, res) => {
  try { 
    const newCategory = await Category.create(req.body);
    if (newCategory) {
      res.status(200).json(newCategory);
    } else {
      res.status(404).json({message: 'No Category Data Found!'});
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Must use an id of a category that already exists. Use the GET route above to view options.
/* req.body should look like this...
    {
      category_name: "Accessories"
    }
*/
router.put('/:id', async (req, res) => {
  try { 
    const newCategory = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (newCategory) {
      res.status(200).json(newCategory);
    } else {
      res.status(404).json({message: 'No Category Data Found!'});
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Must use an id of a category that already exists. Use the GET route above to view options.
router.delete('/:id', async (req, res) => {
  try {
    await Product.update({ category_id: null }, {
      where: {
        category_id: req.params.id
      }
    }); 
    const categoryData = await Category.destroy({
      where: {
      id: req.params.id,
      }
    });
    if (categoryData) {
      res.status(200).json(categoryData);
    } else {
      res.status(404).json({message: 'No Category Data Found!'});
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
