package net.codejava;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BlockedUserService {

	@Autowired
	private BlockedUserRepository repo;

	public List<BlockedUser> listAll() {
		return repo.findAll();
	}

	public void save(BlockedUser blockedUser) {
		repo.save(blockedUser);
	}

	public BlockedUser get(String Username) {
		return repo.findById(Username).get();
	}

	public void delete(String Username) {
		repo.deleteById(Username);
	}
}
