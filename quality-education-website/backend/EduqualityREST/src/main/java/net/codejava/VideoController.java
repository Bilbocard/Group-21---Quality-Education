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
public class VideoController {

	@Autowired
	private VideoService service;
	
	@GetMapping("/video")
	public List<Video> list() {
		return service.listAll();
	}
	
	@GetMapping("/video/{VideoID}")
	public ResponseEntity<Video> get(@PathVariable Integer VideoID) {
		try {
		Video video = service.get(VideoID);
		return new ResponseEntity<Video>(video, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Video>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/video")
	public void add(@RequestBody Video video) {
		service.save(video);
		
	}
	
	@PutMapping("/video/{VideoID}")
	public ResponseEntity<?> update(@RequestBody Video video,
			@PathVariable Integer VideoID) {
		try {
		Video existVideo = service.get(VideoID);
		service.save(video);
		return new ResponseEntity<>(existVideo, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/video/{VideoID}")
	public void delete(@PathVariable Integer VideoID) {
		service.delete(VideoID);
	}
}
