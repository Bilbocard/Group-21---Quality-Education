package net.codejava;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VideoService {

	@Autowired
	private VideoRepository repo;
	
	public List<Video> listAll() {
		return repo.findAll();
	}
	
	public void save(Video video) {
		repo.save(video);
	}
	
	public Video get(Integer VideoID) {
		return repo.findById(VideoID).get();
	}
	
	public void delete(Integer VideoID) {
		repo.deleteById(VideoID);
	}
}
