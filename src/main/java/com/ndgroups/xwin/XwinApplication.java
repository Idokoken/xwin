package com.ndgroups.xwin;

import com.ndgroups.xwin.Repository.UserRepository;
import com.ndgroups.xwin.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class XwinApplication implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(XwinApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		//User user = new User("ken", "nd", 30, "enginner");
		userRepository.save(new User("ken", "nd", 30, "enginner"));
		userRepository.save(new User("jude", "kele", 50, "politician"));
	}
}
