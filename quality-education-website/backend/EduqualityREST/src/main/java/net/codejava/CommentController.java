package net.codejava;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommentController {

	@Autowired
	private CommentService service;
	
	@GetMapping("/comment")
	public List<Comment> list() {
		return service.listAll();
	}
	
	@GetMapping("/comment/{CommentID}")
	public ResponseEntity<Comment> get(@PathVariable Integer CommentID) {
		try {
		Comment comment = service.get(CommentID);
		return new ResponseEntity<Comment>(comment, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Comment>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/comment")
	public void add(@RequestBody Comment comment) {
		service.save(comment);
		
	}
	
	@PutMapping("/comment/{CommentID}")
	public ResponseEntity<?> update(@RequestBody Comment comment,
			@PathVariable Integer CommentID) {
		try {
		Comment existComment = service.get(CommentID);
		service.save(comment);
		return new ResponseEntity<>(existComment, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/comment/{CommentID}")
	public void delete(@PathVariable Integer CommentID) {
		service.delete(CommentID);
	}
}
