package com.example.app08.api.controller;

import com.example.app08.api.request.CreateTicketRequest;
import com.example.app08.application.dto.TicketDto;
import com.example.app08.application.mapper.TicketMapper;
import com.example.app08.application.service.TicketService;
import com.example.app08.domain.entity.Ticket;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping({"/api/tickets", "/api/v1/tickets"})
public class TicketController {
  private final TicketService service;

  public TicketController(TicketService service) {
    this.service = service;
  }

  @GetMapping
  public List<TicketDto> list() {
    return service.list().stream().map(TicketMapper::toDto).toList();
  }

  @PostMapping
  public TicketDto create(@Valid @RequestBody CreateTicketRequest req) {
    Ticket e = new Ticket();
    e.setName(req.name());
    e.setStatus(req.status());
    return TicketMapper.toDto(service.create(e));
  }
}
