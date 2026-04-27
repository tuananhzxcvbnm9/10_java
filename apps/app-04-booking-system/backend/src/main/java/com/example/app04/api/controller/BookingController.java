package com.example.app04.api.controller;

import com.example.app04.api.request.CreateBookingRequest;
import com.example.app04.application.dto.BookingDto;
import com.example.app04.application.mapper.BookingMapper;
import com.example.app04.application.service.BookingService;
import com.example.app04.domain.entity.Booking;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping({"/api/bookings", "/api/v1/bookings"})
public class BookingController {
  private final BookingService service;

  public BookingController(BookingService service) {
    this.service = service;
  }

  @GetMapping
  public List<BookingDto> list() {
    return service.list().stream().map(BookingMapper::toDto).toList();
  }

  @PostMapping
  public BookingDto create(@Valid @RequestBody CreateBookingRequest req) {
    Booking e = new Booking();
    e.setName(req.name());
    e.setStatus(req.status());
    return BookingMapper.toDto(service.create(e));
  }
}
