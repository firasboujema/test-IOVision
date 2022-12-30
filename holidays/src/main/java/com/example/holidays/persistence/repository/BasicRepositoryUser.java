package com.example.holidays.persistence.repository;

import com.example.holidays.persistence.entity.Holiday;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BasicRepositoryUser extends CrudRepository<Holiday, Long> {
}