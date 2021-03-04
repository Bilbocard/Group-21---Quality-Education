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
public class UserController {

	@Autowired
	private UserService service;
	
	@GetMapping("/user")
	public List<User> list() {
		return service.listAll();
	}
	
	@GetMapping("/user/{Username}")
	public ResponseEntity<User> get(@PathVariable String Username) {
		try {
		User user = service.get(Username);
		return new ResponseEntity<User>(user, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/user")
	public void add(@RequestBody User user) {
		service.save(user);
		
	}
	
	@PutMapping("/user/{Username}")
	public ResponseEntity<?> update(@RequestBody User user,
			@PathVariable String Username) {
		try {
		User existUser = service.get(Username);
		service.save(user);
		return new ResponseEntity<>(existUser, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/user/{Username}")
	public void delete(@PathVariable String Username) {
		service.delete(Username);
	}
}