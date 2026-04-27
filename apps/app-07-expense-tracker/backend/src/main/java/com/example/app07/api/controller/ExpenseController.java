package com.example.app07.api.controller;

import com.example.app07.api.request.CreateExpenseRequest;
import com.example.app07.application.dto.ExpenseDto;
import com.example.app07.application.mapper.ExpenseMapper;
import com.example.app07.application.service.ExpenseService;
import com.example.app07.domain.entity.Expense;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping({"/api/expenses", "/api/v1/expenses"})
public class ExpenseController {
  private final ExpenseService service;

  public ExpenseController(ExpenseService service) {
    this.service = service;
  }

  @GetMapping
  public List<ExpenseDto> list() {
    return service.list().stream().map(ExpenseMapper::toDto).toList();
  }

  @PostMapping
  public ExpenseDto create(@Valid @RequestBody CreateExpenseRequest req) {
    Expense e = new Expense();
    e.setName(req.name());
    e.setStatus(req.status());
    return ExpenseMapper.toDto(service.create(e));
  }
}
