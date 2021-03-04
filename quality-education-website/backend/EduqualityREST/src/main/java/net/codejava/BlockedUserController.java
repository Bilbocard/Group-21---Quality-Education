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
public class BlockedUserController {

	@Autowired
	private BlockedUserService service;
	
	@GetMapping("/blockedUser")
	public List<BlockedUser> list() {
		return service.listAll();
	}
	
	@GetMapping("/blockedUser/{Username}")
	public ResponseEntity<BlockedUser> get(@PathVariable String Username) {
		try {
		BlockedUser blockedUser = service.get(Username);
		return new ResponseEntity<BlockedUser>(blockedUser, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<BlockedUser>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/blockedUser")
	public void add(@RequestBody BlockedUser blockedUser) {
		service.save(blockedUser);
		
	}
	
	@PutMapping("/blockedUser/{Username}")
	public ResponseEntity<?> update(@RequestBody BlockedUser blockedUser,
			@PathVariable String Username) {
		try {
		BlockedUser existBlockedUser = service.get(Username);
		service.save(blockedUser);
		return new ResponseEntity<>(existBlockedUser, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/blockedUser/{Username}")
	public void delete(@PathVariable String Username) {
		service.delete(Username);
	}
}
