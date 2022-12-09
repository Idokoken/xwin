package com.ndgroups.xwin.Repository;

import com.ndgroups.xwin.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
