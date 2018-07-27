/* use handle product related route. */

 const express = require('express');
 const router = express.Router();
 
 
 router.get('/', (req, res, next) =>{
	 
	 res.status(200).json({
		 message: 'Handling GET request to /products'
	    });
	 	 
    });
 
  router.post('/', (req, res, next) =>{
	 
	 res.status(200).json({
		 message: 'Handling Post request to /products'
	    });
	 	
	});
	
  router.get('/:productId', (req, res, next) =>{
	 const id = req.params.productId;
	 if(id == 'specialId'){
		  res.status(200).json({
			  message: 'You deserved the special Id',
			  id: id
		  });
	  }else{
		  res.status(200).json({
			  message:'You passed an Id',
				   id: id
		 });
	 }
    });
 
  router.patch('/:productId', (req, res, next) =>{
	 res.status(200).json({
		 message: 'Updated Product'
	    });
    });
	
  router.delete('/:productId', (req, res, next) =>{
	 res.status(200).json({
		 message: 'Deleted Product'
	    });
    });
	
 module.exports = router;