package net.codejava;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {

	@Autowired
	private CommentRepository repo;
	
	public List< Comment> listAll() {
		return repo.findAll();
	}
	
	public void save(Comment comment) {
		repo.save(comment);
	}
	
	public  Comment get(Integer CommentID) {
		return repo.findById(CommentID).get();
	}
	
	public void delete(Integer CommentID) {
		repo.deleteById(CommentID);
	}
}
